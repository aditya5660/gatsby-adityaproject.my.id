import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          roundedCircle
          width="140"
          height="140"
          src={`../../images/adityaputra.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Halo! Nama Saya <b>{`${author}`}</b>.Saya seorang&nbsp;
            <b>{occupation}</b> yang memiliki ketertarikan lebih terhadap teknologi dan senang saat berhasil memecahkan suatu masalah dengan teknologi.
              Saat ini saya bekerja di salah satu software house di Yogyakarta, Indonesia sebagai Back End Engineer. 
          </p>
          <p className="i-5">
            Waktu senggang saya, lebih banyak dihabiskan untuk riset teknologi baru dalam pemrograman dan berkontribusi di open source projects sambil menyeruput kopi.
            Saya juga banyak membaca buku tentang bisnis, pengelolaan keuangan dan personal branding.
          </p>
          <p className="i-5">
            Lihat <Link to="/projects">projects</Link> saya untuk melihat apa yang telah saya lakukan! 
            Atau kunjungi <Link to="/blog">blog</Link> saya untuk melihat apa yang baru-baru ini menarik perhatian saya!  
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:red.five@rebellion.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Berikut beberapa buku dari daftar bacaan saya:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Berikut beberapa film dari daftar bacaan saya:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
