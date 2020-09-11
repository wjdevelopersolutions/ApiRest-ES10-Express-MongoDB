class News 
{
    constructor(
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
    ){
        this.about = about;
        this.provider = provider;
        this.datePublished = datePublished;
        this.clusteredArticles = clusteredArticles;
        this.mentions = mentions;
        this.video = video;
        this.category = category;
        this.name = name;
        this.url = url;
        this.description = description;
        this.image = image;
    }

    get news() {
        return this;
    }
}

export default News;