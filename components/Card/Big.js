import tw, { styled } from "twin.macro";
import Image from "next/image";
import { Heading, Text } from "../Title";
import Category from "../Category";
import Link from "next/link";
import { Read } from "../Button";
const Big = ({ post }) => {

    const { title, excerpt, slug, categories, thumbnail: { url: thumbnail } } = post[0];

    return (
        <div tw="flex items-center">
            <div tw="w-1/2">
                <Image src={thumbnail}
                    alt="cover"
                    width={500}
                    height={400}
                />
            </div>
            {/* Text  */}
            <div tw="w-1/2  ">
                <div tw="w-4/5 space-y-5" >
                    <div tw="flex text-sm space-x-3 items-center">
                        <Text color="category" >
                            <Category category={categories} />
                        </Text>
                        <Point />
                        <Text>5 min read</Text>
                    </div>
                    <div tw="">
                        <Link href={`/post/${slug}`}>
                            <a>
                                <Heading>{title}</Heading>
                            </a>
                        </Link>
                    </div>
                    <Text>{excerpt}</Text>
                    <Read>
                        <Link href={`/post/${slug}`}>
                            <a>Read Post</a>
                        </Link>
                    </Read>
                </div>
            </div>
        </div>
    );
};

export default Big;

const Point = styled.div`
${tw`text-lg text-gray-500`} 

::after{
    content: "\u2022";
}
`;