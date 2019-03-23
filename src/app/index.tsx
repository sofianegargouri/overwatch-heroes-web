import { camelizeKeys } from 'humps'
import React from 'react'
import { HeroCard } from '../components'
import './styles.sass'

type Hero = {
  id: string,
  name: string,
  imageCardBackgroundUrl: string,
  imageSplashUrl: string,
  imagePortraitUrl: string,
}

interface IProps {}

interface IState {
  heroes: Hero[],
  loading: boolean,
}

class App extends React.Component<IProps, IState> {
  endOfHeroes = false
  page = 1
  perPage = 10

  constructor(props: IProps) {
    super(props)

    this.state = {
      heroes: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchHeroes()
    document.addEventListener('scroll', () => this.handleScroll())
  }

  handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight > scrollHeight - 200) {
      this.fetchHeroes()
    }
  }

  fetchHeroes() {
    const { heroes, loading } = this.state

    if (loading || this.endOfHeroes) { return }

    this.setState({ loading: true })
    fetch(`https://overwatch-heroes-api.herokuapp.com/heros?page=${this.page}&per_page=${this.perPage}`)
      .then(async (response) => {
        const json = await response.json()

        this.endOfHeroes = json.length < 1
        this.page += 1
        this.setState({
          heroes: [
            ...heroes,
            ...camelizeKeys(json) as Hero[],
          ],
          loading: false,
        })
      })
  }

  render() {
    const { heroes, loading } = this.state
    return (
      <div className="app">
        {heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    )
  }
}

export default App
