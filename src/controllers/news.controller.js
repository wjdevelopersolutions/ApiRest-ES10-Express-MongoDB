import { addNews } from '../services/news.service';
import { mongoConnect } from '../util/database';

exports.getIndexNews = async (req, res) => {

    let db = await mongoConnect();
    let notices = await db.collection('notices').find({}).toArray();
    res.json( notices );
}

exports.postIndexNews = async (req, res) => {
  let entryNew =  addNews(
                      null,
                      [
                          {
                            _type: "Organization",
                            name: "ESPN"
                          }
                      ],
                      'datePublished": "2020-09-10T08:46:00',
                      null,
                      null,
                      null,
                      'Sports',
                      'Football"s economy has taken a hit from COVID-19, but it"s not as bad as first feared',
                      'https://www.espn.com/soccer/blog-espn-fc-united/story/4177249/footballs-economy-has-taken-a-hit-from-covid-19but-its-not-as-bad-as-first-feared',
                      'Football"s losses in the wake of COVID-19 were projected to be cataclysmic. The game"s taken a hit, but -- knock on wood -- it"s come through it.',
                      {
                          contentUrl: null,
                          thumbnail: {
                            contentUrl: "https://www.bing.com/th?id=ON.946A0B841C99203C0056A846B1B90E26&pid=News",
                            width: 700,
                            height: 393
                          }
                      }
                  );
    let db = await mongoConnect();
    let result = await db.collection('notices').insertOne(entryNew);
    res.json({
      ok: true,
      message: 'Se ha creado la noticia',
      result: result.ops
    });
}