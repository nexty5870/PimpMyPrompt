import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">PimpMyPrompt is an open-source AI prompting tool allowing you to share and discover best AI prompt, helping you to be more productive.</p>

      <Feed />
    </section>
  )
}

export default Home