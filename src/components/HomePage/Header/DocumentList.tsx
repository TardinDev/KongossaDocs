import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../utils/theme';
import { FaSearch } from 'react-icons/fa';
import dataDocs from '../../../utils/dataDocs';

export default function DocumentList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Filtrer les documents en fonction du terme de recherche et de l'onglet actif
  const filteredDocuments = dataDocs.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'All' || doc.type.toLowerCase() === activeTab.toLowerCase();
    return matchesSearch && matchesTab;
  });

  return (
    <Container>
      <Header>
        <Tabs>
          {['All', 'Vidéo', 'Image', 'MP3'].map((tab) => (
            <Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </Tab>
          ))}
        </Tabs>
        <SearchBar>
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span><FaSearch size={20} color={theme.colors.primary} /></span>
        </SearchBar>
      </Header>
      <ScrollContainer>
        <Table>
          {/* <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Type</th>
              <th>Description</th>
              <th>Date d'ajout</th>
              <th>Likes</th>
              <th>Partager</th>
            </tr>
          </thead> */}
          <tbody>
            {filteredDocuments.map((doc, index) => (
              <tr key={index}>
                <td>{doc.id}</td>
                <td>{doc.name}</td>
                <td>{doc.type}</td>
                <td>{doc.description}</td>
                <td>{doc.dateAdded}</td>
                <td>{doc.likes}</td>
                <td><ShareButton>Partager</ShareButton></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-left: 50px;
  margin-bottom: -0.49rem;
`;

const Tab = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? theme.colors.secondary : 'white')};
  color: ${({ active }) => (active ? theme.colors.primary : theme.colors.secondary)};
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ active }) => (active ? theme.colors.primary : '#e0e0e0')};
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  width: 300px;
  margin-right: 50px;
  margin-bottom: 0.1rem;

  span {
    margin-right: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

const ScrollContainer = styled.div`
  background-color: ${theme.colors.secondary};
  max-height: 250px;
  overflow-y: auto;
  border-radius: 8px;
  padding: 0.3rem;
  margin: 0rem 3rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }
`;

const ShareButton = styled.button`
  background-color: #3572ef;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;
