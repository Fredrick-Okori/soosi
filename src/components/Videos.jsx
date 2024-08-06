import React, { useState } from 'react';
import {
    Box,
    Flex,
    Image,
    Button,
    Container,
    Stack,
    Text,
    AspectRatio,
} from '@chakra-ui/react';

const VideoCard = ({ thumbnail, videoUrl, onClick, isSmallScreen }) => (
    <Box
        cursor="pointer"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        onClick={() => onClick(videoUrl)}
        position="relative"
    >
        {isSmallScreen && videoUrl ? (
            <AspectRatio ratio={16 / 9}>
                <iframe
                    title="Video Player"
                    src={videoUrl}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </AspectRatio>
        ) : (
            <>
                <Image src={thumbnail} alt="Video Thumbnail" />
                <Button
                    bgGradient="linear(to-r, purple.500, #df42b1)"
                    color="white"
                    _hover={{
                        bgGradient: 'linear(to-r, purple.500, pink.700)',
                        boxShadow: 'xl'
                    }}
                    position="absolute"
                    bottom="0"
                    left="0"
                    width="full"
                >
                    Play Video
                </Button>
            </>
        )}
    </Box>
);

const VideoPlayer = ({ videoUrl }) => {
    const isGoogleDriveVideo = videoUrl.includes('drive.google.com');
    const isTwitterVideo = videoUrl.includes('twitter.com');

    const getGoogleDriveEmbedUrl = (url) => {
        const fileIdMatch = url.match(/[-\w]{25,}/);
        return fileIdMatch ? `https://drive.google.com/file/d/${fileIdMatch[0]}/preview` : null;
    };

    const getTwitterEmbedUrl = (url) => {
        const tweetIdMatch = url.match(/status\/(\d+)/);
        return tweetIdMatch ? `https://twitframe.com/show?url=${encodeURIComponent(url)}` : null;
    };

    const embedUrl = isGoogleDriveVideo
        ? getGoogleDriveEmbedUrl(videoUrl)
        : isTwitterVideo
            ? getTwitterEmbedUrl(videoUrl)
            : videoUrl;

    return (
        <AspectRatio ratio={16 / 9} width="full">
            <iframe
                title="Video Player"
                src={embedUrl}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="100%"
                height="100%"
                frameBorder="0"
            />
        </AspectRatio>
    );
};

const VideoGallery = () => {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const videos = [
        { videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
        { videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ', thumbnail: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg' },
        { videoUrl: 'https://www.youtube.com/embed/L_jWHffIx5E', thumbnail: 'https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg' },
        { videoUrl: 'https://drive.google.com/file/d/14pXGlH2dxl3mL_pMgJLWoU72ZX5S2Cur/preview', thumbnail: 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=14pXGlH2dxl3mL_pMgJLWoU72ZX5S2Cur' },
        { videoUrl: 'https://twitter.com/i/status/1820740583108792416', thumbnail: 'https://via.placeholder.com/320x180.png?text=Twitter+Video' }
    ];

    return (
        <Container maxW="container.xl" py={5}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
                <Box width={{ base: 'full', md: '70%' }}>
                    {currentVideo && !isSmallScreen ? (
                        <VideoPlayer videoUrl={currentVideo} />
                    ) : (
                        <Box borderWidth="1px" borderRadius="lg" p={5}>
                            <Text>Select a video to play</Text>
                        </Box>
                    )}
                </Box>

                <Flex direction="column" width={{ base: 'full', md: '30%' }} gap={5}>
                    <Text fontWeight="bold" textAlign='center'>Popular Videos</Text>
                    {videos.map((video, index) => (
                        <VideoCard
                            key={index}
                            thumbnail={video.thumbnail}
                            videoUrl={video.videoUrl}
                            onClick={setCurrentVideo}
                            isSmallScreen={isSmallScreen}
                        />
                    ))}
                </Flex>
            </Stack>
        </Container>
    );
};

export default VideoGallery;
