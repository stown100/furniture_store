import React, { useState } from "react";
import Select from "react-select";
import styles from "./select.module.scss";
import arrowImg from "../../../images/selectArrow.svg";
import { selectData, setData } from "../../../redux/slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const SelectComponent = () => {
  const options = [
    { value: "Порядок: сперва новые", label: "Порядок: сперва новые", id: 1 },
    {
      value: "Порядок: сперва дешевле",
      label: "Порядок: сперва дешевле",
      id: 2,
    },
    { value: "Порядок: сперва дороже", label: "Порядок: сперва дороже", id: 3 },
  ];

  const colourStyles = {
    container: (styles: any) => ({
      ...styles,
      width: "100%",
      maxWidth: "288px",
    }),
    control: (styles: any, state: any) => ({
      ...styles,
      border: state.isFocused ? "1px solid #37333F" : "1px solid #C1C4CA",
      boxShadow: 0,
      borderRadius: "20px",
      cursor: "pointer",
      marginRight: "auto",
      transition: ".2s ease-in-out",
      zIndex: 1,
      padding: "3px",
      minHeight: "44px",
      "&:hover": { bac: "1px solid #37333F" },
      backgroundColor: "#FFFFFF",
    }),
    input: (styles: any) => ({ ...styles, border: "none" }),
    placeholder: (styles: any) => ({
      ...styles,
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "17px",
      letterSpacing: "-0.01em",
      color: "#C1C4CA",
      padding: "12px 2px 12px 2px",
      marginLeft: "0",
    }),
    menu: (styles: any, state: any) => {
      return {
        ...styles,
        zIndex: 3,
        marginTop: 0,
        borderRadius: "8px",
        boxShadow: "0px 10px 20px 0px rgba(49,8,8,0.1)",
      };
    },
    menuList: (styles: any) => ({
      ...styles,
      paddingTop: "8px",
      paddingBottom: "12px",
    }),
    valueContainer: (styles: any) => ({
      ...styles,
      paddingLeft: "12px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      maxWidth: "calc(100% - 15px)",
    }),
    option: (styles: any, state: any) => {
      let bacColor = "transparent";
      if (state.isFocused) bacColor = "#F6F7F8";
      if (state.isSelected) bacColor = "#F6F7F8";
      return {
        ...styles,
        color: "#000",
        cursor: "pointer",
        backgroundColor: bacColor,
        "&:active": { backgroundColor: "#F6F7F8" },
        "&:hover": { backgroundColor: "#dddddd" },
      };
    },
    dropdownIndicator: (styles: any) => ({
      ...styles,
      cursor: "pointer",
      svg: {
        width: "24px",
        height: "22px",
        "&hover": {
          color: "#0D51FF",
        },
      },
    }),
  };

  const dispatch = useDispatch();
  const { data } = useSelector(selectData);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (newValue: any) => {
    if (newValue.id === 1) {
      const sortedData = [...data].sort((a, b) => {
        const dateA = moment(a.addedDate, "DD.MM.YYYY");
        const dateB = moment(b.addedDate, "DD.MM.YYYY");
        return dateA.diff(dateB);
      });
      dispatch(setData(sortedData));
    } else if (newValue.id === 2) {
      const sortedPrices = data.map((card) => card.price).sort((a, b) => a - b);
      const sortedCards = sortedPrices.map((price) =>
        data.find((card) => card.price === price)
      );
      dispatch(setData(sortedCards));
    } else if (newValue.id === 3) {
      const sortedPrices = data.map((card) => card.price).sort((a, b) => b - a);
      const sortedCards = sortedPrices.map((price) =>
        data.find((card) => card.price === price)
      );
      dispatch(setData(sortedCards));
    }
    setSelectedOption(newValue);
  };

  return (
    <Select
      styles={colourStyles}
      className={styles.Select}
      defaultValue={selectedOption}
      onChange={handleOptionChange}
      options={options}
    />
  );
};

export default SelectComponent;
