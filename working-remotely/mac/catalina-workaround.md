---
description: There seems to be a bug
---

# Troubleshooting AnyConnect for macOS Catalina

1. In Finder, open **Applications/Utilities** and open Terminal ![](https://help.apple.com/assets/5D92A6940946227D4301035B/5D92A6A50946227D43010362/en_US/31d7054c3bcf00abcba6dd75555bcff0.png) .

2. Type `cd /opt/cisco/AnyConnect` and press **Enter**. 

3. Type `sudo nano AnyConnectLocalPolicy.xml` and press **Enter**. 

4. Type your admin password \(the one you use to log on to your computer\) and press **Enter.**

![](https://lh5.googleusercontent.com/ZgGUAEQUSQPUBYf059vOLkHJmplYDtPOBBDW_TdwOOFdHC9S-UCj17HtC0YapjA2jmDBL8nO441S6YEDRiDt3k5bQ-JXJAY7x3l0jzz68zHgZ9ROPpxjXS_XC1R6WmuQn6V6L2As)

5. Change the highlighted text from `false` to `true`.

![](https://lh3.googleusercontent.com/P2d8B8Q7niaJ1M0gFJks0YMpMKwY7yJnQ4SjH3EZdOtZMBG5G5vmmJHhKQ5YO6DzvbHXFEafOv21DXBAgy0ekRGeYB4Wsvlyz0k8xsmSUNGOiL4-4-axjphEyj8LNHlp56-oTq8U)

6. Press **ctrl+x** to exit.

7. Press **Y** to save changes when prompted.  


