#!/usr/bin/env bash
# Start (or restart) the Visual Diary image proxy + public HTTPS tunnel on the box.
# Requires OPENAI_API_KEY in the environment (never committed, never in the frontend).
#
#   ./scripts/demo-proxy.sh            # proxy on :8787 + https://$SUBDOMAIN.tunl.cc
#
# The tunnel asks tunl.cc for a fixed subdomain so the URL baked into the Pages
# build survives restarts. If it ever changes, open the app once with
#   https://liviaguo.github.io/grok-voicecontrolledstorytellingboard/?api=<new URL>
# (remembered in that browser) or rebuild with VITE_IMAGE_API_BASE=<new URL>.
set -euo pipefail
cd "$(dirname "$0")/.."
PORT="${PORT:-8787}"
SUBDOMAIN="${SUBDOMAIN:-visual-diary-livia}"
LOG_DIR="${LOG_DIR:-/workspace/vd-proxy}"
mkdir -p "$LOG_DIR"
: "${OPENAI_API_KEY:?OPENAI_API_KEY must be set}"

pkill -f "node proxy/server.mjs" 2>/dev/null || true
pkill -f "tunl $PORT" 2>/dev/null || true
pkill -f "tunl.cc $PORT" 2>/dev/null || true
sleep 1

PORT="$PORT" setsid nohup node proxy/server.mjs >"$LOG_DIR/proxy.log" 2>&1 &
export PATH="$(npm prefix -g)/bin:$PATH"
command -v tunl >/dev/null || npm i -g tunl.cc >/dev/null 2>&1
setsid nohup tunl "$PORT" "$SUBDOMAIN" >"$LOG_DIR/tunnel.log" 2>&1 &

URL=""
for _ in $(seq 1 40); do
  URL=$(grep -oE 'https://[a-z0-9-]+\.tunl\.cc' "$LOG_DIR/tunnel.log" | head -1 || true)
  [ -n "$URL" ] && break
  sleep 1
done
[ -n "$URL" ] || { echo "tunnel did not come up; see $LOG_DIR/tunnel.log"; exit 1; }
echo "$URL" >"$LOG_DIR/url.txt"
curl -fsS -m 20 "$URL/health" >/dev/null && echo "health OK" || echo "health check failed (tunnel may need a few seconds)"
echo "Proxy:  http://localhost:$PORT"
echo "Public: $URL"
