import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dropdown } from "carbon-components-react";

import Paging from "./components/Pagination";
import TableView from "./components/TableView";
import GridView from "./components/GridView";
import Options from "./components/Options";
import Header from "./components/Header";

// actions
import { fetchPosts, setPagination } from "./actions";

import { ThemeWhite, ThemeGray10, ThemeGray90, ThemeGray100 } from "./themes";

function App({
  typeView,
  posts,
  page,
  pageSize,
  totalItems,
  fetchPosts,
  setPagination,
}) {
  const [themes, setThemes] = useState("white");
  useEffect(() => {
    fetchPosts(page, pageSize);
  }, [fetchPosts, page, pageSize]);

  const _onChangePagination = (value) => {
    setPagination(value);
    fetchPosts(value.page, value.pageSize);
  };

  function onChangeTheme(e) {
    setThemes(e.selectedItem.id);
  }

  return (
    <div>
      {themes === "white" && <ThemeWhite />}
      {themes === "gray10" && <ThemeGray10 />}
      {themes === "gray90" && <ThemeGray90 />}
      {themes === "gray100" && <ThemeGray100 />}
      <Header />
      <br />
      <br />
      <br />
      <div>
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={[
            {
              id: "white",
              label: "White",
            },
            {
              id: "gray10",
              label: "Gray 10",
            },
            {
              id: "gray90",
              label: "Gray 90",
            },
            {
              id: "gray100",
              label: "Gray 100",
            },
          ]}
          onChange={onChangeTheme}
          label="Select Themes"
          value={themes}
          titleText="Please choose themes."
        />
      </div>

      <Options />
      {typeView === "grid-view" && (
        <div>
          <h4>Grid View</h4>
          <ContainerStyled>
            <GridStyled>
              {posts.map((post) => (
                <GridView
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </GridStyled>
          </ContainerStyled>
        </div>
      )}
      {typeView === "table-view" && <TableView posts={posts} />}
      <Paging
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        onChangePagination={_onChangePagination}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    typeView,
    posts,
    totalItems,
    metadata: { page, pageSize },
  } = state;
  return {
    typeView,
    posts,
    page,
    pageSize,
    totalItems,
  };
};

const mapDispatchToProps = {
  fetchPosts,
  setPagination,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const ContainerStyled = styled.div`
  margin: 0 auto;
`;

const GridStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  > * {
    flex: 0 0 32%;
    margin: 1% 0;
  }
  > :nth-child(3n-1) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;
