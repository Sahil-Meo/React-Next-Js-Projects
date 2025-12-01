import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loader from './Loader';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 12,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }

    letterCapitalize=(string)=>{
        let word = string
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalArticles: 0,
            loading: true,
        }
        document.title = `${this.letterCapitalize(this.props.category)} - NewsMonkey`
    }
    componentDidMount() {
        this.updateNews();
    }

    updateNews = () => {
        const apiKey = '1e5b02100f024e7eb64b54ccaa5db902';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const fixArticles = (data.articles || []).map((article) => ({
                    title: article.title || "No title",
                    description: article.description || "To read more about this news then visit our site by click on button",
                    urlToImage: article.urlToImage || 'https://i.insider.com/674efe1fe45a68623a2785ed?width=1200&format=jpeg',
                    url: article.url || 'https://arynews.tv/',
                    author: article.author || 'ABC',
                    date: article.publishedAt || "Unknown",
                    source: article.source.name
                }));

                this.setState({
                    articles: fixArticles,
                    loading: false
                })
            })
    }


    handleNextClick = () => {
        this.setState(
            (prevState) => ({
                page: prevState.page + 1,
            }),
            () => this.updateNews()
        );
    }

    handlePreviousClick = () => {
        this.setState(
            (prevState) => ({
                page: prevState.page - 1,
            }),
            () => this.updateNews()
        );
    }

    render() {

        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsMonkey Top {this.letterCapitalize(this.props.category)} Headlines</h1>
                {this.state.loading && <Loader />}
                <div className='row my-4' >
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItems title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.date} source={element.source} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type="button" onClick={this.handlePreviousClick} className="btn btn-dark" disabled={this.state.page === 1}>&larr; Previous</button>
                    <button type="button" onClick={this.handleNextClick} className="btn btn-dark" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}
