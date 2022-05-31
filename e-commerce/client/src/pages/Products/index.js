import React from 'react'
import Card from '../../components/card'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { useInfiniteQuery } from 'react-query'
import { fetchProductList } from '../../api';

const Products = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery('products', fetchProductList, {
        getNextPageParam: (lastGroups, allGroups) => {
            const morePageExist = lastGroups?.length === 12;
            if (!morePageExist) {
                return;
            }
            return allGroups.length + 1
        }
    })
    if (status === 'loading') return 'Yükleniyor...'
    if (status === "error") return "Error var"
    return (
        <div>
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                {
                    data && data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.map((item, index) => (
                                    <Box key={index} w="100%">
                                        <Card item={item} />
                                    </Box>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
                <Card />
            </Grid>
            <Flex mt="10" justifyContent="center">
                <Button isLoading={isFetchingNextPage} colorScheme="green" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                    {
                        isFetchingNextPage ? 'Loading more' : hasNextPage ? "Load More" : "Nothing more load"
                    }
                </Button>
            </Flex>
        </div>
    )
}

export default Products