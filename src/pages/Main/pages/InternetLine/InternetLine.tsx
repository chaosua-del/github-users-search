import {
  Box,
  Card,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { Button } from '@/ui';

const tableHeaders = ['Клієнт', 'Послуги', 'Талон, час', 'Кнопки дій'];

const mockTableData = [
  {
    id: 'asd',
    client: 'Роман Васильович',
    phoneNumber: '+3801231232',
    service: 'Оформлення документів',
    ticketNumber: '42',
    date: new Date(),
  },
  {
    id: 'as2d',
    client: 'Дмитро Романович',
    phoneNumber: '+3801231232',
    service: 'Оформлення документів',
    ticketNumber: '41',
    date: new Date(),
  },
  {
    id: 'a3sd',
    client: 'Михайло С.',
    phoneNumber: '+3801231232',
    service: 'Оформлення документів',
    ticketNumber: '40',
    date: new Date(),
  },
  {
    id: 'a4sd',
    client: 'Валерія Ж.',
    phoneNumber: '+3801231232',
    service: 'Оформлення документів',
    ticketNumber: '22',
    date: new Date(),
  },
  {
    id: 'asd',
    client: 'Костянтин М.',
    phoneNumber: '+3801231232',
    service: 'Оформлення документів',
    ticketNumber: '12',
    date: new Date(),
  },
];

export const InternetLine = () => {
  return (
    <Card>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {tableHeaders.map((el) => (
                <Th key={el}>{el}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {mockTableData.map((el) => (
              <Tr key={el.id}>
                <Td>
                  <Flex direction="column" gap="5px">
                    <Text>{el.phoneNumber}</Text>
                    <Text>{el.client}</Text>
                  </Flex>
                </Td>
                <Td>{el.service}</Td>
                <Td>
                  <Flex alignItems="center" gap="10px">
                    <Box
                      borderRadius="5px"
                      color="white"
                      padding="5px"
                      backgroundColor="primary.color"
                    >
                      {el.ticketNumber}
                    </Box>
                    <Text>{el.date.toLocaleDateString()}</Text>
                  </Flex>
                </Td>
                <Td>
                  <Button variant="teal">Друк</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
