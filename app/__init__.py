"""The app package."""

from __future__ import annotations

from .landing import LandingApp

__all__ = (
    "LandingApp",
)


def __dir__() -> tuple[str, ...]:
    return (*__all__, "app")

def __getattr__(attr: str) -> LandingApp:
    if attr == "app":
        return LandingApp()
    raise AttributeError(attr)
