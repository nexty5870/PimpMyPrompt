import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'


export const metadata = {
  title: 'PimpMyPrompt',
  description: 'Discover and Share your next best AI prompts'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default Rootlayout