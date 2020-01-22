# Knack:-Using-Big-Buttons

* Navigate to the settings cog on your application, click “API & Code”
* There is a “Javascript” and “CSS” tab you can toggle to
  * There are 2 snippets of code: 1 for the Javascript tab and 1 for the CSS tab

## Big Button JS code

function bigButton\(div\_id, view\_id, url, fa\_icon, button\_label\) { // create a large button

```text
$("<div/>", {
  id: div_id,
}).appendTo("#" + view_id);
```

$\("\#" + div\_id\).append\(" [" + button\_label + "](knack:%22%20+%20url%20+%20%22)"\);

}

$\(document\).on\('knack-view-render.view\_167', function\(event, page\) { // create large button on the home page bigButton\( "all", "view\_167", "[https://atd.knack.com/finance-purchasing\#purchase-requests/](https://atd.knack.com/finance-purchasing#purchase-requests/)", "archive", "All Purchase Requests" \);

```text
bigButton(
    "create",
    "view_167",
    "https://atd.knack.com/finance-purchasing#new-purchase-requests/",
    "plus-circle",
    "New Purchase Request"
);

bigButton(
    "review",
    "view_167",
    "https://atd.knack.com/finance-purchasing#reviews/",
    "check-square-o",
    "Review Purchase Requests"
);

bigButton(
    "my",
    "view_167",
    "https://atd.knack.com/finance-purchasing#my-purchase-requests/",
    "male",
    "My Purchase Requests"
);
```

}\);

$\(document\).on\('knack-page-render.scene\_68', function\(event, page\) { // render Review Details page

## Big Button CSS code

.big-button-container { border-radius: 2px; box-shadow: 0px 1px 2px 0px gray; font-size: 2.5em; padding: 10px; margin: 20px; max-width: 10em; }

.big-button-container:hover { background-color: \#f7f7f7; cursor: pointer; }

.fa { vertical-align: middle; }

a.big-button { text-decoration: none; }

.kn-input-name input, .kn-input-address input{ text-transform: uppercase; }

* You would create a blank page and add RICH TEXT boxes. 

## Example

My example: `https://builder.knack.com/atd/finance-purchasing#pages/scene_1`

When you open the RICH TEXT views, they have their own views. Ex. “All PRs” [https://builder.knack.com/atd/finance-purchasing\#pages/scene\_1/views/view\_167](https://builder.knack.com/atd/finance-purchasing#pages/scene_1/views/view_167)

