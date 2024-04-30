import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Alert,
  Box,
  Card,
  Grid,
  Heading,
  Image,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useInView } from 'framer-motion';

import { useUsers } from '@/api';
import { Container, SearchBar } from '@/ui';

export const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchToggle, setSearchToggle] = useState(true);

  const navigate = useNavigate();
  const params = useSearchParams();

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const loaderRefInView = useInView(loaderRef, { margin: '150px' });

  const searchQueryFromUrl = params[0].get('search') || '';

  const toast = useToast();

  const { data, fetchNextPage, isLoading, isPending, isError, error } = useUsers(
    searchQueryFromUrl,
    searchToggle
  );

  useEffect(() => {
    if (searchQueryFromUrl) {
      setSearchQuery(searchQueryFromUrl);
      setSearchToggle((prev) => !prev);
    }
  }, [searchQueryFromUrl]);

  useEffect(() => {
    if (!isLoading && !isPending && loaderRefInView) {
      console.log('fetching next page');

      fetchNextPage();
    }
  }, [loaderRefInView]);

  useEffect(() => {
    if (isError) {
      toast({ title: error.message, colorScheme: 'red' });
    }
  }, [isError]);

  const handleSearchQueryChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery) {
      navigate({
        search: `search=${searchQuery}`,
      });
    }
  };

  const usersData =
    (data && data.pages.length && data.pages.map((el) => el.data.items)) || [];

  return (
    <Container paddingTop="100px">
      <Heading marginBottom="25px">Search for users</Heading>
      <SearchBar
        onSubmit={handleSearchSubmit}
        placeholder="Search for github users"
        value={searchQuery}
        onValueChange={handleSearchQueryChange}
      />

      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        marginTop="40px"
        gap="20px"
        flexWrap="wrap"
      >
        {usersData.map((el) =>
          el.map((user) => (
            <Card
              key={user.id}
              padding="5px"
              maxWidth="200px"
              cursor="pointer"
              onClick={() => navigate('/' + user.login)}
            >
              <Image src={user.avatar_url} />
              <Text fontSize="20px" fontWeight="bold">
                {user.login}
              </Text>
            </Card>
          ))
        )}
      </Grid>

      {!data?.pages[0].data.total_count && !isPending && (
        <Alert>No users with {searchQueryFromUrl}</Alert>
      )}
      {loaderRefInView && isLoading && (
        <Box>
          <Spinner size="xl" />
        </Box>
      )}
      <Box ref={loaderRef} />
    </Container>
  );
};
