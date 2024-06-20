"""The landing app visible to newcomers."""

from __future__ import annotations

from typing import TYPE_CHECKING

from textual.app import App
from textual.lazy import Lazy
from textual.widgets import Markdown

if TYPE_CHECKING:
    from textual.app import ComposeResult


class LandingApp(App[None]):
    """The landing app visible to newcomers."""

    def compose(self) -> ComposeResult:
        """Compose the app."""
        yield Lazy(Markdown("NaukaPythona.com! 🚀"))
