# Squash commits in a series

`git reset --soft HEAD~3 && git commit`

> squashes 3 most recent commits

`git reset --soft HEAD~3 && git commit --edit -m"$(git log --format=%B --reverse HEAD..HEAD@{1})"`

> squashes 3 most recent commits but with all commit messages concatenated into squashed commit 