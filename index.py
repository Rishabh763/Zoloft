from flask import Flask, send_from_directory
app = Flask(__name__)

@app.route("/")
def index():
  return send_from_directory("out", "page.js")  # Assuming your Next.js app starts with page.js

# Serve other static assets from the Next.js "out" directory
@app.route("/<path:path>")
def serve_static(path):
  return send_from_directory("out", path)

if __name__ == "__main__":
  app.run(debug=True)
