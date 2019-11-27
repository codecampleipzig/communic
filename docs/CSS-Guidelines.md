# Communic CSS Guidelines

_&copy; LSD Code Camp Leipzig Team 1 2019_

These Guidlines shall make shure that CSS code we write is understandable and in the same style & structure, so there is no need to refracture to much and stuff can be reused by everyone.

__Most important__: please try to stick to that, and reach out to LSD Team if you want to change something globally. 

## Contents

* [Guidelines](#guidelines)
   * [.camelCase](#camelCase)
   * [Refracture](#refracture)
   * [Global Styles & Utility Classes](#global-styles--utility-classes)
   * [Use the :host Selector](#use-the-host-selector)
   * [Use CSS Variables for Colors,...](#use-css-variables-for-colors)
   * [Font Awesome Icon Font](#font-awesome-icon-font)
   * [Montserrat Font](#montserrat-font)
* [Mozilla's MDN CSS Guidelines](#mozillas-mdn-css-guidelines)
* [Mozilla's _Organizing your CSS_ Tipps](#mozillas-organizing-your-css-tipps)

## Guidelines

Please read the following rules for writing CSS. Feel free to ask if something is unclear.

### .kebab-case
Use kebab-case styling for class-names. Make sure your class-names are easy understandable!

---

### Refracture
While & after writing CSS, refracture it and try to make the structure and the naming clearer. Rename stuff and add comments if that is not the case.

---

### Global Styles & Utility Classes
Check if some of the properties you wrote could be needed somewhere else.
These are utility classes that everyone can make use of to not write basic stuff over and over again.

#### Globals Example
Let's change the default behaviour of plain HTML Elements globally, so we may not need any classes for example for headings.
```css
p {
   line-height: 1.5;
}
```

#### Utility Example
We often use `ul` & `li` Elements for Lists. Those get a bullet-point and margin & padding,... by default. Let's create a class `.unstyledList` to reset that style easyly. It's a nice utility.

```css
.unstyledList {
   list-style: none;
   margin: 0;
   padding: 0;
}

.unstyledList>li {
   margin:0;
   padding:0;
}
```

#### Module Example
We all need the Card Style for the Login Card, the Project Cards, or the Projects Sections. We can use a global .card Class to share a equal the styling.

```css
.card {
  ...
  /* Adds Standard behavior and behavior for the signup card */
}
.cardFull {
  ...
  /* Extends the Card to be full width */
}
.cardList > .card {
  ...
  /* Overwrites to use Cards in a .cardList (Project List) */
}
.card .card {
  ...
  /* Cards inside Cards are styled a bit different (like tasks), without the need of a seperate class */
}
```

Put these classes at the start of your .css File in an extra Section and give us a hint. We will take care, that those classes will be available globaly by placing them in the `/src/styles.css` file. Check this file to get an idea what is already available.

---

### Use the :host Selector
Every Component you create will automatically create the wrapping element in the HTML (e.g.: `<app-component>`). To give this wrapper some styling, use the `:host` selector in your components CSS file. No need to use a extra `div.wrapper`!

Check the `/src/app/task`-Component as a good example.

#### This will make the whole Component a flex-row:
```css
:host {
   display: flex;
   flex-direction: row;
}
```

---

### Use CSS Variables for Colors,...
By declaring CSS Variables we can easyly change the primary color or the font-family in the whole project or the whole component.

So whenever you use a color, or a specifiy font-size, or a font, or some other property you can name a variable for that makes sense to declare, do it!

You can declare variables to the `:host` Selector. So you can use the variable in the whole component (because everything is a child of the Host in your Component).

Check the `:root` in `/src/styles.css` to see all global Variables you can already use.

We will take care of variables that can be declared in the global styles.css.

---

### Font Awesome Icon Font
The Font Awesome Icon font is already integrated as a icon font. That means you can set `font-family: "Font Awesome 5 Free";` and letters will turn into icons. Check the [Font Awesome Gallery](https://fontawesome.com/icons?d=gallery&m=free) to see all icons. Choose one and use the HTML right unter the Headline to paste the Icon.

#### Button with Icon example

This will show the Join Button in the Task List.

```HTML
<button class="button taskTeamJoin outlined">
   <i class="fas fa-plus"></i> Join
</button>
```

---

### Montserrat Font

The Montserrat Font is included from Google Fonts and added to the body. That means you don't have to set it anywhere else.

But please use the correct font-weight:

```css
font-weight: 300; /* regular (standard) */
font-weight: 500; /* medium */
font-weight: 600; /* semi-bold */
font-weight: 700; /* bold */
```

__Warning__: Actually we use the `light` style as regular, while regular would actually be `400`. But `400` looks like shit (at least in Firefox), so we decided to not use it.

---

## Mozilla's MDN CSS Guidelines

There are some basic guidelines for CSS coding in Mozilla's MDN. These are the rules they set up for writing CSS in their documentation to help everyone understand the documentations better. Please read the whole page from the Headline [Use flexible/relative units](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Use_flexiblerelative_units).

These points they mention are important for our CSS:
* [Use flexible/relative units](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Use_flexiblerelative_units)
* [Plan your CSS — avoid overriding](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Plan_your_CSS_%E2%80%94_avoid_overriding)
* [Use expanded syntax](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Use_expanded_syntax)
*  [Favor longhand rules over terse shorthand](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Favor_longhand_rules_over_terse_shorthand) 
*  [CSS comments](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#CSS_comments) 
*  [Don't use !important](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Don't_use_!important) 
*  [Use "mobile first" media queries](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Use_mobile_first_media_queries) 
*  [Put multiple selectors on separate lines](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Put_multiple_selectors_on_separate_lines) 

---

## Mozilla's _Organizing your CSS_ Tipps

There is another nice read there about [Createing logical sections in your stylesheet](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing#Create_logical_sections_in_your_stylesheet). Read that section, and the whole page if you want ;)


