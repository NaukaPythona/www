"""
Hide navigation and table of contents on every page.
"""

from __future__ import annotations

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from mkdocs.config import Config
    from mkdocs.structure.nav import Navigation
    from mkdocs.structure.pages import Page
    from mkdocs.utils.templates import TemplateContext

def on_page_context(
    context: TemplateContext,
    page: Page,
    config: Config,
    nav: Navigation,
) -> None:  # noqa: F821
    page.meta["hide"] = [*(page.meta.get("hide") or ()), "navigation", "toc"]


# TODO: Find a way to hook into 404.html
