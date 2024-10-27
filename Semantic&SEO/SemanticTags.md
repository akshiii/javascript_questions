# Semantic Tags

- It is better for SEO
- Easier to Read/scan the html
- Better for Screen Readers/ accesiblity

<header>    
</header>

<main>
</main>

<footer>
</footer>

- In main tag , we can have multiple sections, better to use sections than <div> . Each part inside a section must serve same semantic purpose.
  A section means that the content inside is related to each other.
  whereas an <article> tag means that i should be able to pull out the artice tag and its contents and place it somewhere else and it has the same meaning.
  Example give feedback section in a webpage can be put anywhere, and it would make sense to use <article> here.

<main>
        <section></section>
        <section></section>
</main>

- We can use <aside> as a side bar in a webpage, which is never a part of <main> tag like left or right sidebars in mdn web docs page.
  They also use <nav> tag to put some navigable content there.
