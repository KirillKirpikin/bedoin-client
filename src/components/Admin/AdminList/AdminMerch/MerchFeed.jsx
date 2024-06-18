import { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_IMG } from "../../../../utils/constants";
import { useGetAllAdminMerchQuery } from "../../../../store/api/merch.api";

const  MearchFeed = () => {
    const {data, isLoading} = useGetAllAdminMerchQuery();
    const [feedXML, setFeedXML] = useState(null);

    const generateProductXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.short_description}</description>
        <link>${BASE_URL + 'merch/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateXML = (products) => `
        <?xml version="1.0" encoding="UTF-8"?>
        <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
        <channel>
            ${products.map(generateProductXML).join('\n')}
        </channel>
        </rss>
    `;

    useEffect(()=>{
        if(!isLoading && data && data.length > 0){
            const generatedXML = generateXML(data);
            setFeedXML(generatedXML);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    return(
        <div>
        {feedXML ? (
            <pre>{feedXML}</pre>
        ) : (
            <p>Генерация XML...</p>
        )}
    </div>
    )
}

export default MearchFeed;