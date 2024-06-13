"""
Prepare a correct CNAME file.

This hook expects the environment variable "stage" to be set,
either to "production" or "preview".
If that requirement is not met, the CNAME file is not created.

In local build, the hook does not create a CNAME file.
In production, the hook creates a CNAME with 'naukapythona.com'
In staging (preview), the hook creates a CNAME with 'preview.naukapythona.com'.
"""

from __future__ import annotations

from contextlib import ContextDecorator, suppress
from os import getenv
from pathlib import Path
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from mkdocs.config import Config
    from mkdocs.structure.pages import Page
    from mkdocs.structure.nav import Navigation
    from mkdocs.utils.templates import TemplateContext


DOMAINS = {
    "production": "naukapythona.com",
    "preview": "preview.naukapythona.com",
}


@type("suppress_decorator", (suppress, ContextDecorator), {})(KeyError)
def on_post_build(config: Config) -> None:
    (stage := getenv("stage")) and Path(config["site_dir"], "CNAME").write_text(DOMAINS[stage])


def on_page_context(
    context: TemplateContext,
    page: Page,
    config: Config,
    nav: Navigation,
) -> None:  # noqa: F821
    try:
        domain = Path(config["site_dir"], "CNAME").read_text()
    except FileNotFoundError:
        domain = None
    context["domain"] = domain
