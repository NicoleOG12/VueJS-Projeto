<template>
<div class="footer">
    <footer>
        <div class="container">
            <div class="cont2">
                <div class="item">
                    <h3>Exemplo 1</h3>
                    <ul>
                        <li><a href="#">A</a></li>
                        <li><a href="#">B</a></li>
                        <li><a href="#">C</a></li>
                    </ul>
                </div>
                <div class="item">
                    <h3>Exemplo 2</h3>
                    <ul>
                        <li><a href="#">D</a></li>
                        <li><a href="#">E</a></li>
                        <li><a href="#">F</a></li>
                    </ul>
                </div>
                <div>
                    <p class="copyright" >Copyright © 2024</p>
                </div>
            </div>
            
        </div>
    </footer>
    </div>

</template>

<script>

</script>

<style>
.footer {
  padding: 50px 0;
  background-color:#ff6996;
  color:#fcedf1;
  margin-top: 300px;
}

.footer h3{
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer ul a:hover {
  opacity:1;
}



.footer .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}

.cont2 {
  display: flex; 
  flex-wrap: wrap; 
  margin-right: -15px; 
  margin-left: -15px;
  flex-direction: row;
  justify-content: center;
}

.item {
  flex: 0 0 100%; 
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px; 
}


</style>