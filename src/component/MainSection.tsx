import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Header,
  Text,
  Button,
  Dialog,
  Input,
} from "@fluentui/react-northstar";
import { AddIcon, SearchIcon } from "@fluentui/react-icons-northstar";
import { dummyItem } from "../data";

const SingleMenu = ({ items }: any) => {
  const [show, setShow] = useState(false);
  if (items?.menu?.items) {
    return (
      <div>
        <a href="#" onClick={() => setShow(!show)}>
          {items.content}
          <br />
        </a>
        <div style={{ display: show ? "block" : "none", paddingLeft: "30px" }}>
          {items?.menu?.items?.map((elem: any, index: number) => (
            <div key={index}>
              <SingleMenu items={elem} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <li>{items.content}</li>;
};

const MainSection = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dummyItem);
  const [searchedItems, setSearchedItems] = useState();
  const [itemData, setItemData] = useState<any>([]);

  var ans: any = [];
  function recursiveSearch(array: any, letter: string): any {
    const result = [];
    for (const obj of array) {
      if (obj.content.toLowerCase().includes(letter.toLowerCase())) {
        // console.log("found");
        result.push(obj);
      }
      if (obj.menu?.items.length > 0) {
        result.push(...recursiveSearch(obj.menu?.items, letter));
      }
    }
    return result;
  }

  useEffect(() => {
    const arr = recursiveSearch(dummyItem, search);
    setSearchedItems(arr);
  }, [search]);

  const handleClick = () => {
    const newItem = {
      id: Math.random(),
      name: search,
      description: "",
    };
    itemData.push(newItem);
    // setItemData((prevData: any) => [...prevData, newItem]);
    localStorage.setItem("myData", JSON.stringify(itemData));
    setSearch("");
  };

  return (
    <>
      <Box>
        <Header as="h3" content="Header1" />
        <Text content="Mega menu can be confirmed here" />
      </Box>
      <Box>
        <Header as="h4" content="Header2" />
        <Text content="This is some text content that provides bloomberg" />
      </Box>
      <Box>
        <Button
          onClick={handleClick}
          content={"Add Item"}
          loader="Bypass Firewall"
          secondary
          iconPosition="after"
          icon={<AddIcon />}
        />
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e: any) => setSearch(e.target.value)}
          value={search}
        />
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "12px",
        }}
      ></div>
      {data.map((el: any, index: any) => {
        return <SingleMenu items={el} key={index} />;
      })}

      {/* {console.log(itemData)} */}
      {itemData.map((item: any) => (
        <div>
          <p key={item.id}>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default MainSection;
