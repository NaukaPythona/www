"""Place recommendations here. Always submit in PRs for recommenders' review."""

from __future__ import annotations

from typing import NamedTuple


class Recommendation(NamedTuple):
    """A recommendation from someone I worked with."""

    content: str
    recommendee: str
    recommender: str
    recommender_role: str


RECOMMENDATIONS = ()
