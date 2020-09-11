import News from '../models/news.model';

// let news = [];

const addNews = (
    about,
    provider,
    datePublished,
    clusteredArticles,
    mentions,
    video,
    category,
    name,
    url,
    description,
    image
) => {

    const entryNews = new News(
        about,
        provider,
        datePublished,
        clusteredArticles,
        mentions,
        video,
        category,
        name,
        url,
        description,
        image
    );

    return entryNews
}

exports.addNews = addNews;
// exports.news = news;