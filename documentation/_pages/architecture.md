---
title: Architecture and namespaces
layout: documentation
permalink: "/guidelines/architecture/"
---

<div class="au-c-content">

## Namespaces

We use a global ```.au-``` namespace. Each layer of the ITCSS architecture is also namespaced according to the rules below.

## Architecture
We follow the ITCSS architecture

1. **Settings:** variables and settings
2. **Tools:** mixins
3. **Generic:** reset and global styles
4. **Elements:** base html elements, e.g.: html, body, …
5. **Objects (OOCSS):** unstyled patterns, e.g.: grid, table, flag, box, … (namespace: ```.au-o-```“)
6. **Components:** atoms and components (namespace: ```.au-c-```)
7. **Utilities:** single function classes (namespace: ```.au-u-```)
8. **Shame:** quickfixes & temporary hacks

</div>