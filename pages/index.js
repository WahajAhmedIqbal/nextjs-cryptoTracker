import CoinsList from '../components/coinsList'
import SearchBar from '../components/SearchBar'
import Layout from '../components/Layout'


export default function Home({ filteredCoin }) {
  return (
    <Layout>
      <div className='coin_app'>
        <SearchBar type='text' placeholder='Search' />
        <CoinsList filteredCoin={filteredCoin} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')

  const filteredCoin = await res.json()

  return {
    props: {
      filteredCoin
    }
  }
}