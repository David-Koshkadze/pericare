import articles_data from '../articles.json'

export default function handler(req, res) {
  const {art_id} = req.query

  const article = articles_data[art_id - 1]

  res.status(200).json(article)
}