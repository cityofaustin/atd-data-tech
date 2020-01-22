# Knack:-Mobile-Optimization

This is our code documentation wiki page for Knack apps.

## Template for Mobile-friendly Knack Custom CSS

```text
/* Mobile Styles */
@media (max-width: 800px) {

/* FORMS */

  /* Increase size of buttons with type="submit" */
  button[type="submit"] {
    height: 64px !important;
    font-size: 32px !important;
    min-width: fit-content;
    width: 100%;
  }

  /* Increase font size of form field labels */
  .kn-label {
    font-size: 22px;
  }

  .kn-detail-body {
    font-size: 22px;
  }

  /* Increase height of text fields */
  input[type="text"] {
    height: 48px !important;
    font-size: 22px !important;
  }

   /* Increase font size of checkbox options */
  .option.checkbox {
    font-size: 22px;
  }

/* END FORMS */

/* NAVIGATION */

  /* Increase size of "back" links at bottom of pages */
  a.ang-link {
      font-size: 22px !important;
  }

  /* Increase height of select fields */
  .chzn-single {
    height: 48px !important;
  }

  .kn-select {
    height: 48px !important;
  }

  select {
    height: 48px !important;
    font-size: 22px !important;
  }

  /* Increase height of container surrounding select fields */
  .chzn-container {
    height: 48px;
    font-size: 22px !important;
  }

  .chzn-container > a > span {
    font-size: 22px !important;
  }

  /* Increase font size of dropdown text in select fields */
  .chzn-drop {
    font-size: 22px !important;
  }

/* END NAVIGATION */

/* ICONS */

  /* Increase size of Font Awesome icons */
  .icon .fa {
      font-size: 22px !important;
  }

/* END ICONS */

/* BUTTONS */

  /* Increase size of search button */
  .kn-button.search {
    height: 48px;
  }

   /* Increase default menu button size */
  .kn-button
  {
    height: 48px !important;
    font-size: 22px !important;
  }

/* END BUTTONS */

}
```

