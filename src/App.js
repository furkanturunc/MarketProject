import logo from './images/Logo.png';
import basketIcon from './images/basket.png';
import product from './images/product.png'
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useState } from 'react';
import { useEffect} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import axios from 'axios';
import Pagination from './Pagination';

const useStyles = makeStyles({
  App: {
    backgroundColor: '#e5e5e5',
    boxSizing: 'border-box'
  },

  header: {
    position: "relative",
    display: "flex",
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: "center",
    background: 'rgb(30, 164, 206)',
    width: "100%",
    height: "76px",
  },

  logo: {
    width: "142px",
    height: "41px", 
    padding: "0px",
    margin: "0px",
    boxSizing: 'border-box'
  },
  basketArea: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    height: "76px",
    background: 'rgb(20, 117, 148)',
    width: "129px",
    position: "absolute",
    right: "104px",
    cursor: "pointer",
  },
  basketPriceTotal: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "18px",
    display: "flex",
    alignItems: 'center',
    letterSpacing: "0.16px",
    color: 'rgb(255, 255, 255)',
    margin: "0px 8px",
  },

  container: {
    position: "relative",
    display: "flex",
    flexDirection: 'row',
    width: "100%",
    height: "1200px",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "104px",
    paddingRight: "104px",
    marginTop: "38px",
    boxSizing: "border-box"
  },

  filterPart: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    height: "1200px",
    flexDirection: 'column',
    width: "296px",
    marginRight: "16px",
    padding: "0px",
    marginTop: "0px",
    paddingRight: "50px",
  },

  filterSubHeadings: {
    backgroundColor: '#e5e5e5',
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    color: "rgb(105, 116, 136)",
    marginBottom: "12px",
    boxSizing: "border-box",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px"
  },

  sorting: {
    width: "100%",
    boxSizing: "border-box",
    height: "214px",
    marginBottom: "36px",
    
  },

  sortingBody: {
    width: "100%",
    height: "160px",
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: "0px",
    display: "flex",
    flexDirection: 'column',
    padding: "24px"
  },

  brands: {
    width: "100%",
    boxSizing: "border-box",
    height: "274px",
    marginBottom: "36px",
  },

  brandsBody: {
    width: "100%",
    backgroundColor: "rgb(255, 255, 255)",
    marginBottom: "0px",
    display: "flex",
    flexDirection: 'column',
    padding: "24px",
    height: "220px",
    overflowY: "scroll",
  },


  tags: {
    width: "100%",
    display:"block",
    boxSizing: "border-box",
    height: "274px",
    
  },

  tagsBody: {
    width: "100%",
    height: "238px",
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: "0px",
    display: "flex",
    flexDirection: 'column',
    padding: "24px",
    overflowY: "scroll",
    
  },


  products: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    marginTop: "0px",
    maxWidth: "755px",
    marginRight: "0px",
    width: "755px"
  },

  productsTitle: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "26px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.25px",
    color: "rgb(111, 111, 111)",
    marginBottom: "16px",
    textAlign: "left",
  },

  mugAndShirtButtons: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "16px",
    padding: "0px",
    margin:"0px",
    boxSizing: "border-box",
  },

  mainArea: {
    display: "flex",
    flexFlow: "column",
    marginBottom: "16px",
    width: "100%",
    padding: "22px",
    backgroundColor: "rgb(255, 255, 255)",
    boxSizing: "border-box",
    height: "992px",
    
  },

  prevAndNext: {
    display: "flex",
    alignItems: "center", 
    justifyContent: "center",
    width: "100%",
    height: "40px",
    boxSizing: "border-box",
  },

  prevButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    marginRight: "57px",
    color: '#1ea4ce',
  },

  nextButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    marginRight: "57px",
    color: '#1ea4ce',
    marginLeft:"57px",
  },

  productCard: {
    display: "flex",
    flexDirection: "column",
    width: "165px",
    height: "200px",
    marginRight: "24px",
    marginBottom: "12px",
    border: "none",
    boxShadow: "none"
  },

  productImage: {
    width: "89px",
    height: "89px"
  },

  addButton: {
    marginLeft: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "124px",
    height: "22px",
    background: "rgb(30, 164, 206)",
    border: "none",
    borderRadius: "2px",
    cursor: "pointer",
    color: "#fff",
    fontFamily: "Open Sans"
  },

  search: {
    border: "1px solid rgb(226, 226, 226)",
    borderRadius: "2px",
    padding: "12px",
    outline: "none",
    marginBottom: "17px",
  },


  basket: {
    display: "flex",
    flexDirection: "column",
    marginTop: "0px",
    backgroundColor: "rgb(255, 255, 255)",
    width: "296px",
    height: "auto",
    position: "absolute",
    right: "104px",
    marginRight: "0px",
    padding: "8px",
    border: "8px solid rgb(30, 164, 206)",
  },


  basketText: {
    display: "flex",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0.16px",
    color: "rgb(25, 25, 25)",
    marginBottom: "4px"
  },

  basketPrice: {
    display: "flex",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0.16px",
    fontWeight: "600",
    color: "rgb(30, 164, 206)",
    marginBottom: "0px"
  },

  changeCount: {
    width: "32px",
    height: "32px",
    
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "rgb(30, 164, 206)",
    border: "none",
    fontSize: "22px",
  },



});



  

function App() {
  
  const products_url = "https://getirserver.herokuapp.com/api/products";
  const brands_url = "https://getirserver.herokuapp.com/api/companies";

  const [basketTotal, setBasketTotal] = useState(0);
  const [products, setProducts]= useState([]);
  const [brands, setBrands] = useState([]);
  const [tags, setTags] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);
  const [tempProducts, setTempProducts] = useState([]);
  const [stateBrands, setStateBrands] = useState([true]);
  const [stateTags, setStateTags] = useState([true]);
  const [value, setValue] = useState('priceLowToHigh');

  const fetchBrands = async() => {
    try {
      const response = await fetch(brands_url);
      const brandsMain = await response.json();
      let brands = brandsMain.map(a => a.slug);
      const sortedBrands = brands.sort();
      setBrands(sortedBrands);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchProducts = async () => {

    try {
      const response = await fetch(products_url);
      const products = await response.json();
      setProducts(products);
      
      let allTags = products.map(a => a.tags);
      let merged = [].concat.apply([], allTags);
      const uniqueTags = new Set(merged);
      const backToArray = [...uniqueTags];
      let sortedTags = backToArray.sort(); 
      setTags(sortedTags);
      const temp = products.filter(a => a.itemType === "mug");
      const sortedProducts = temp.sort((a,b) => (a.price > b.price) ? 1 : -1);
      setTempProducts(sortedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    fetchProducts();
    fetchBrands();
  }, []);
  


  const handlePriceLowToHigh = () => {
    const sortedProducts = tempProducts.sort((a,b) => (a.price > b.price) ? 1 : -1);
    setTempProducts(sortedProducts);
  }

  const handlePriceHighToLow = () => {
    const sortedProducts = tempProducts.sort((a,b) => (a.price > b.price) ? -1 : 1);
    setTempProducts(sortedProducts);
  }

  const handleNewToOld = () => {
    const sortedProducts = tempProducts.sort((a,b) => (a.added > b.added) ? 1 : -1);
    setTempProducts(sortedProducts);
  }

  const handleOldToNew = () => {
    const sortedProducts = tempProducts.sort((a,b) => (a.added > b.added) ? -1 : 1);
    setTempProducts(sortedProducts);
  }

  const handleChangeBrands = (event) => {
    let tempBrands = [...stateBrands];
    tempBrands[event.target.id] = event.target.checked;
    setStateBrands(tempBrands);
    let newItems = tempProducts.filter((item) => item.manufacturer === brands[event.target.id - 1]);
    let finalItems = newItems.concat.apply(newItems, tempProducts);
    setTempProducts(finalItems);
  };

  const handleChangeTags = (event) => {
    let tempTags = [...stateTags];
    tempTags[event.target.id] = event.target.checked;
    setStateTags(tempTags);
  };

  const handleChangeSorting = (event) => {
    setValue(event.target.value);
    if(event.target.value === "priceLowToHigh") { return handlePriceLowToHigh();}
    if(event.target.value === "priceHighToLow") {return handlePriceHighToLow();}
    if(event.target.value === "priceNewToOld") {return handleNewToOld();}
    if(event.target.value === "priceOldToNew") {return handleOldToNew();}
  };

  const handleBasketTotal = ({price, name}) => {
    const newTotal = basketTotal + price;
    setBasketTotal(newTotal);
    const exist = basketProducts.filter(item => item.name === name);
    if(exist.length === 0) {
      let count = 1;
      const newProduct = {name, price, count };
      setBasketProducts([...basketProducts, newProduct] );
    }
    else {
      basketProducts.map((item, index) => {
        if(item.name === name) {
          item.count = item.count + 1;
        }
        return item;
      })
    }
  }

const handleBasketProductCount = ({name, process}) => {
   basketProducts.map((item, index) => {
     if(item.name === name) {
       if(process === '-') {
          if(item.count !== 1) {
            item.count = item.count - 1;
          }
          else {
            const newBasket = basketProducts.filter(item => item.name !== name);
            setBasketProducts(newBasket);
          }
          const newBasketTotal = basketTotal - item.price;
          setBasketTotal(newBasketTotal);
        }
        if(process === '+') {
          const newBasketTotal = basketTotal + item.price;
          setBasketTotal(newBasketTotal);
          item.count = item.count + 1;
        }
     }
     return item;
   })
}


const handleItemType = (itemType) => {
    let newItems = products.filter((item) => item.itemType === itemType);
    setTempProducts(newItems); 
}

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = tempProducts.slice(indexOfFirst, indexOfLast);
  const paginate = pageNo => setCurrentPage(pageNo);


  function BasketEmpty() {
    if(basketProducts.length === 0) {
      return <div style={{color: "rgb(255, 152, 0)"}}>Sepetinizde ürün bulunmamaktadır</div>
    }
    return <div>{basketTotal.toFixed(2)}</div>
  }

  function BasketProductInfo({name, price, count}) {
    if(basketProducts.length !== 0) {
      return (
        <div style={{display: "flex"}}>
          <div>
            <div className={classes.basketText}>{name}</div>
            <div className={classes.basketPrice}>₺ {price}</div>
          </div>
          <div>
            <button className={classes.changeCount} onClick={() => handleBasketProductCount({name, process:'-'})}>-</button>
            <button className={classes.changeCount}>{count}</button>
            <button className={classes.changeCount} onClick={() => handleBasketProductCount({name, process:'+'})}>+</button>
          </div>

        </div>
      )
    }
    else {
      return <div style={{color: "rgb(255, 152, 0)"}}>Sepetinizde ürün bulunmamaktadır</div>
    }
  }

  function SingleProduct({price, name, added}) {
    return (
      <div>
      <Card className={classes.productCard}>
      <CardContent>
        <Typography>
          <img src={product} alt="" className={classes.productImage}/>
        </Typography>
        <Typography variant="body2" component="p">
          <p color="textPrimary" style={{color:"rgb(30, 164, 206)"}}>{price}</p>
        </Typography>
        <Typography variant="body2" component="p">
          <p color="textPrimary" style={{fontFamily: 'Open Sans'}}>{name}</p>
        </Typography>
      </CardContent>
    </Card>

    <div>
      <button className={classes.addButton} onClick={() => handleBasketTotal({price, name})}>Add</button>
    </div>
</div>
      );
  };

  const classes = useStyles();
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <img src={logo} alt="" className={classes.logo}/>
        <div className={classes.basketArea}>
          <img src={basketIcon} alt="" />
          <p className={classes.basketPriceTotal}>
            ₺
            {basketTotal.toFixed(2)}
          </p>
        </div>
      </header>
      <section className={classes.container}>
        <div className={classes.filterPart}>
          <div className={classes.sorting}>
            <p className={classes.filterSubHeadings}>Sorting</p>
            <div className={classes.sortingBody}>
              <FormControl component="fieldset">
                <RadioGroup name="position" value={value} onChange={handleChangeSorting}>
                  <FormControlLabel value="priceLowToHigh" control={<Radio />} label="Price low to high" onChange={handlePriceLowToHigh}/>
                  <FormControlLabel value="priceHighToLow" control={<Radio />} label="Price high to low" onChange={handlePriceHighToLow}/>
                  <FormControlLabel value="newToOld" control={<Radio />} label="New to old" onChange={handleNewToOld}/>
                 <FormControlLabel value="oldToNew" control={<Radio />} label="Old to new" onChange={handleOldToNew}/>
                </RadioGroup>
            </FormControl>
            </div>
          </div>
          <div className={classes.brands}>
            <p className={classes.filterSubHeadings}>Brands</p>
            <div className={classes.brandsBody}>
              <input type="text" placeholder="Search brand" className={classes.search}/>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={stateBrands[0]} onChange={handleChangeBrands} id={0} />}
                label="All"></FormControlLabel>
                {brands.map((brand, index) => {
                  return <FormControlLabel control={<Checkbox checked={stateBrands[index + 1]} onChange={handleChangeBrands} id={index + 1} />}
                      label={brand}></FormControlLabel>
                }
                )}
                
              </FormGroup>
            </div>
          </div>
          <div className={classes.tags}>
            <p className={classes.filterSubHeadings}>Tags</p>
            <div className={classes.tagsBody}>
              <input type="text" placeholder="Search tag" className={classes.search}/>
              <FormGroup>

                <FormControlLabel control={<Checkbox checked={stateTags[0]} onChange={handleChangeTags} id={0} />}
                label="All"></FormControlLabel>
                 {tags.map((tag, index) => {
                   return <FormControlLabel control={<Checkbox checked={stateTags[index + 1]} onChange={handleChangeTags} id={index + 1}/>} label={tag}></FormControlLabel>
                 })}
                </FormGroup>
            </div>
          </div>
        </div>
        <div className={classes.products}> 
          <p className={classes.productsTitle}>Products</p>
          <div className={classes.mugAndShirtButtons}>
            <button style={{color: "#f2f0fd",width: "60px",height: "30px",backgroundColor: "rgb(30,164,206)", border: "none", cursor:"pointer"}} onClick={() => handleItemType("mug")}>mug</button>
            <button style={{color: "#1ea4ce",width: "60px",height: "30px",backgroundColor: "rgb(242,240,253)", border:"none", cursor:"pointer"}} onClick={() => handleItemType("shirt")}>shirt</button>
          </div>
          <div className={classes.mainArea}>
            
            <div style={{display:"flex"}}>
              {currentItems.slice(0,4).map((product) => {
              return <SingleProduct key={product.added} {...product}></SingleProduct>
            }
            )}
            </div>
            <div style={{display:"flex"}}>
              {currentItems.slice(4,8).map((product) => {
              return <SingleProduct key={product.added} {...product}></SingleProduct>
            }
            )}
            </div>
            <div style={{display:"flex"}}>
              {currentItems.slice(8,12).map((product) => {
              return <SingleProduct key={product.added} {...product}></SingleProduct>
            }
            )}
            </div>
            <div style={{display:"flex"}}>
              {currentItems.slice(12,16).map((product) => {
              return <SingleProduct key={product.added} {...product}></SingleProduct>
            }
            )}
            </div>
            
                        
          </div>
          <div className={classes.prevAndNext}>
              <button className={classes.prevButton} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
              <Pagination 
                itemsPerPage = {itemsPerPage}
                totalItems = {tempProducts.length}
                paginate = {paginate}
                currentPage = {currentPage}
              />
              <button className={classes.nextButton} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
              
            
          </div> 
        </div>

        <div className={classes.basket}>
          <div>

              {basketProducts.map((product) => {
              return <BasketProductInfo {...product}></BasketProductInfo>
            }
            )}
             <BasketEmpty/>
            
          </div>
        </div>
      </section>
      

    </div>
  );
}

export default App;
