import articles_data from '../../articles.json'

export default function handler(req, res) {
  const {by_cat} = req.query

  const articles = articles_data.filter(i => i.category === by_cat)

  res.status(200).json(articles)
}