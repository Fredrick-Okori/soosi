import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CustomLeftArrow = ({ onClick }) => {
    return (
        <IconButton
            aria-label="left-arrow"
            icon={<FiChevronLeft/>}
            onClick={onClick}
            position="absolute"
            left="7%"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            rounded="full"
            bgGradient="linear(to-r, purple.500, #df42b1)"
            color="white"
            _hover={{
                bgGradient: 'linear(to-r, purple.500, pink.700)',
                boxShadow: 'xl',
            }}
        />
    );
};

const CustomRightArrow = ({ onClick }) => {
    return (
        <IconButton
            aria-label="right-arrow"
            icon={<FiChevronRight />}
            onClick={onClick}
            position="absolute"
            right="7%"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            rounded="full"
            bgGradient="linear(to-r, purple.500, #df42b1)"
            color="white"
            _hover={{
                bgGradient: 'linear(to-r, purple.500, pink.700)',
                boxShadow: 'xl',
            }}
        />
    );
};

export { CustomLeftArrow, CustomRightArrow };
