<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useGetAllDripQuery } from "../../../store/api/drip.api";
import { useGetAllMerchQuery } from "../../../store/api/merch.api";
import { useGetAllCoffeeQuery } from "../../../store/api/api";
import { useGetAllLemonadeQuery } from "../../../store/api/lemonade.api";
import { BASE_URL_IMG } from "../../../utils/constants";

const  ProductFeed = () => {
    const coffee = useGetAllCoffeeQuery();
    const drip = useGetAllDripQuery();
    const merch = useGetAllMerchQuery();
    const lemonade = useGetAllLemonadeQuery();
    const [feedXML, setFeedXML] = useState(null);

    const aa = [];

    const generateCoffeeXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.description}</description>
        <link>${BASE_URL_IMG + 'coffee/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateDriptXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.description}</description>
        <link>${BASE_URL_IMG + 'drip/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateMerchtXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.short_description}</description>
        <link>${BASE_URL_IMG + 'merch/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateLemonadetXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.short_description}</description>
        <link>${BASE_URL_IMG + 'lemonade/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateXML = (coffee, drip, lemonade, merch) => `
        <?xml version="1.0" encoding="UTF-8"?>
        <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
        <channel>
            ${coffee.length > 0 && coffee.map(generateCoffeeXML).join('\n')}
            ${drip.length > 0 && drip.map(generateDriptXML).join('\n')}
            ${lemonade.length > 0 && lemonade.map(generateLemonadetXML).join('\n')}
            ${merch.length > 0 && merch.map(generateMerchtXML).join('\n')}
        </channel>
        </rss>
    `;

    useEffect(()=>{
        if(!coffee.isLoading && !drip.isLoading && !merch.isLoading && !lemonade.isLoading){
            const generatedXML = generateXML(coffee.data, drip.data, lemonade.data, merch.data, aa)
            setFeedXML(generatedXML);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coffee.isLoading, drip.isLoading, merch.isLoading, lemonade.isLoading ])

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

=======
import { useEffect, useState } from "react";
import { useGetAllDripQuery } from "../../../store/api/drip.api";
import { useGetAllMerchQuery } from "../../../store/api/merch.api";
import { useGetAllCoffeeQuery } from "../../../store/api/api";
import { useGetAllLemonadeQuery } from "../../../store/api/lemonade.api";
import { BASE_URL_IMG } from "../../../utils/constants";

const  ProductFeed = () => {
    const coffee = useGetAllCoffeeQuery();
    const drip = useGetAllDripQuery();
    const merch = useGetAllMerchQuery();
    const lemonade = useGetAllLemonadeQuery();
    const [feedXML, setFeedXML] = useState(null);

    const aa = [];

    const generateCoffeeXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.description}</description>
        <link>${BASE_URL_IMG + 'coffee/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateDriptXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.description}</description>
        <link>${BASE_URL_IMG + 'drip/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateMerchtXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.short_description}</description>
        <link>${BASE_URL_IMG + 'merch/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateLemonadetXML = (product) => `
        <item>
        <id>${product._id}</id>
        <title>${product.title}</title>
        <description>${product.short_description}</description>
        <link>${BASE_URL_IMG + 'lemonade/' + product._id}</link>
        <image_link>${BASE_URL_IMG + product.imgs[0]}</image_link>
        <availability>${product.in_stock === true ?  'in stock' : 'out of stock'}</availability>
        <price>${product.price.standart.regular + '.00'}</price>
        <sale_price>${product.price.standart.opt + '.00'}</sale_price>
        <condition>new</condition>
        <brand>Bedoin</brand>
        </item>
    `;

    const generateXML = (coffee, drip, lemonade, merch) => `
        <?xml version="1.0" encoding="UTF-8"?>
        <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
        <channel>
            ${coffee.length > 0 && coffee.map(generateCoffeeXML).join('\n')}
            ${drip.length > 0 && drip.map(generateDriptXML).join('\n')}
            ${lemonade.length > 0 && lemonade.map(generateLemonadetXML).join('\n')}
            ${merch.length > 0 && merch.map(generateMerchtXML).join('\n')}
        </channel>
        </rss>
    `;

    useEffect(()=>{
        if(!coffee.isLoading && !drip.isLoading && !merch.isLoading && !lemonade.isLoading){
            const generatedXML = generateXML(coffee.data, drip.data, lemonade.data, merch.data, aa)
            setFeedXML(generatedXML);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coffee.isLoading, drip.isLoading, merch.isLoading, lemonade.isLoading ])

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

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default ProductFeed;