"""Serve the app in the browser."""

from __future__ import annotations

from textual_serve.server import Server

if __name__ == "__main__":
    args = ("textual", "run", "--dev" * __debug__, __package__)
    server = Server(" ".join(filter(None, args)))
    server.serve()
