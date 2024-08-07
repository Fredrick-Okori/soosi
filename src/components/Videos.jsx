import React, { useState, useRef, useEffect } from 'react';
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

// VideoCard component to display individual video cards with thumbnails
const VideoCard = ({ thumbnail, videoUrl, onClick, isSmallScreen }) => {
    const videoRef = useRef(null);
    const [thumbnailSrc, setThumbnailSrc] = useState(thumbnail);
    const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);

    // Load the thumbnail from video if no explicit thumbnail is provided
    useEffect(() => {
        if (!thumbnail && videoUrl) {
            const video = videoRef.current;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            video.addEventListener('loadeddata', () => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                setThumbnailSrc(canvas.toDataURL('image/jpeg'));
                setIsThumbnailLoaded(true);
            });
        }
    }, [videoUrl]);

    return (
        <Box
            cursor="pointer"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            onClick={() => onClick(videoUrl)}
            position="relative"
         // Adjust width for card
            height={{ base: 'auto', md: '250px' }}  // Adjust height for card
        >
            {isSmallScreen && videoUrl ? (
                <AspectRatio ratio={9 / 16} width="full">
                    <iframe
                        title="Video Player"
                        src={videoUrl}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    />
                </AspectRatio>
            ) : (
                <>
                    <Image
                        src={isThumbnailLoaded ? thumbnailSrc : 'placeholder-image-url'} // Placeholder until thumbnail is loaded
                        alt="Video Thumbnail"
                        objectPosition="center"
                        objectFit="cover"
                        width='fit-content'
                        // Adjust width for thumbnail
                    />
                    <video ref={videoRef} src={videoUrl}  />
                    <Button
                        color='teal.500'
                        rounded={0}
                        _hover={{
                            bgGradient: 'linear(to-r, purple.500, pink.700)',
                            boxShadow: 'xl'
                        }}
                        position="absolute"
                        bottom="0"
                        left="0"
                        width="full"
                        size="sm"  // Adjust size for smaller button
                    >
                        Play Video
                    </Button>
                </>
            )}
        </Box>
    );
};

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
        <AspectRatio ratio={9/ 16} width="full" height={{ base: "100px", md: "500px" }}>
            <iframe
                title="Video Player"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
        { videoUrl: 'https://drive.google.com/file/d/1oCLA3s2i7c_Eh5iRpncPNhRNG0k9xSCG/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=1oCLA3s2i7c_Eh5iRpncPNhRNG0k9xSCG' },
        { videoUrl: 'https://drive.google.com/file/d/1hWgN773y0Rehy4do2TuSIjRO03dMS_op/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=1hWgN773y0Rehy4do2TuSIjRO03dMS_op' },
        { videoUrl: 'https://drive.google.com/file/d/19kvV9OZNJJxfHil5SDa619rXOe53NQTT/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=19kvV9OZNJJxfHil5SDa619rXOe53NQTT' },
        { videoUrl: 'https://drive.google.com/file/d/1Rhb1FswUta_LqorUlK1aTnVavgMCxIfD/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=1Rhb1FswUta_LqorUlK1aTnVavgMCxIfD' },
        { videoUrl: 'https://drive.google.com/file/d/1ZYpdE3ve-vmveqlbIiiVmcA_jKHEqix4/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=1ZYpdE3ve-vmveqlbIiiVmcA_jKHEqix4' },
        { videoUrl: 'https://drive.google.com/file/d/1u1f4sIDHE--7kFMcmZW_SgTVe2opAAu9/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=1u1f4sIDHE--7kFMcmZW_SgTVe2opAAu9' },
        { videoUrl: 'https://drive.google.com/file/d/1eE4IfBOjLGbes8L9LZ5PMAFi0i2I2KcG/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=1eE4IfBOjLGbes8L9LZ5PMAFi0i2I2KcG' },
        { videoUrl: 'https://drive.google.com/file/d/14pXGlH2dxl3mL_pMgJLWoU72ZX5S2Cur/preview', thumbnail: 'https://drive.google.com/uc?export=view&id=14pXGlH2dxl3mL_pMgJLWoU72ZX5S2Cur' },
    ];

    return (
        <Container maxW="container.xl" py={5}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
                <Box width={{ base: 'full', md: '70%' }}>
                    {currentVideo && !isSmallScreen ? (
                        <VideoPlayer videoUrl={currentVideo} />
                    ) : (
                            <>
                            
                            </>
                    )}
                </Box>

                <Flex direction="column"  gap={5}>
                    <Text fontWeight="bold" textAlign='center'>Popular Videos</Text>
                    {videos.map((video, index) => (
                        <VideoCard
                            key={index}
                            thumbnail={video.thumbnail}  // Pass thumbnail URL here
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
