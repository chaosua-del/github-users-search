import { useEffect } from 'react';
import { Link as ReactLink, useParams } from 'react-router-dom';
import {
  Avatar,
  Card,
  Divider,
  Flex,
  Heading,
  Link,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';

import { useUserInfo } from '@/api/User';
import { Container } from '@/ui';

export const User = () => {
  const { id } = useParams();
  const toast = useToast();

  const { data, error } = useUserInfo(id);

  useEffect(() => {
    if (error) {
      toast({ title: error.message, colorScheme: 'red' });
    }
  }, [error]);

  if (!data) {
    return (
      <Flex width="100%" height="100vh" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  const {
    avatar_url: img,
    blog,
    company,
    email,
    followers,
    following,
    html_url: htmlUrl,
    login,
    name,
  } = data.user;

  console.log(data);

  return (
    <Container paddingTop="100px">
      <Heading marginBottom="20px">User info</Heading>
      <Card mt="50px" padding="30px" display="flex" gap="30px" direction="row">
        <Flex direction="column" gap="30px" width="50%" flexShrink="0">
          <Flex gap="20px" alignItems="center">
            <Avatar size="xl" name={login} src={img} />
            <Flex direction="column" gap="10px">
              <Heading size="lg">{name}</Heading>
              <Link href={htmlUrl}>@{login}</Link>
              <Link href={`mailto:${email}`}>{email}</Link>
            </Flex>
          </Flex>
          <Divider />
          <Flex gap="10px">
            <Text fontSize="20px" fontWeight="600">
              Following: {following}
            </Text>
          </Flex>
          <Divider />
          {blog && (
            <>
              <Flex direction="column" gap="15px">
                <Heading size="md">Blog</Heading>
                <Link href={blog}>{blog}</Link>
              </Flex>
              <Divider />
            </>
          )}
          {company && (
            <>
              <Flex direction="column" gap="15px">
                <Heading size="md">Company</Heading>
                <Text>{company}</Text>
              </Flex>
              <Divider />
            </>
          )}
        </Flex>
        {followers && (
          <Flex direction="column" gap="20px">
            <Heading size="md">Followers</Heading>
            <Flex flexWrap="wrap" gap="20px">
              {data.followers.map((el) => (
                <Flex key={el.id} alignItems="center" gap="20px">
                  <Avatar name={el.login} src={el.avatar_url} />
                  <Link as={ReactLink} replace to={'/' + el.login} size="sm">
                    {el.login}
                  </Link>
                </Flex>
              ))}
            </Flex>
          </Flex>
        )}
      </Card>
    </Container>
  );
};
