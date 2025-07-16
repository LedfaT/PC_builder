import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.thenewsapi.com/v1/news/all",
          {
            params: {
              api_token: import.meta.env.VITE_NEWS_API_TOKEN,
              categories: "tech",
              limit: 6,
              language: "en",
            },
          }
        );
        setArticles(response.data.data);
      } catch (e) {
        console.error("Ошибка при загрузке новостей:", e);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article) => (
        <div
          key={article.uuid}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={article.image_url}
            alt={article.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(article.published_at).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-700 flex-grow">{article.snippet}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
