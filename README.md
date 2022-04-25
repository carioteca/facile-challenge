<h1>Apresentação</h1>

<p>O projeto foi desenvolvido para o processo seletivo da Facile Sistema, foi desenvolvido uma aplicação com framework Nest JS e um banco dos de dados local em Postegres. 

<br/>
  
<b> O sistema consiste em: </b>
<li> cadastrar uma mensagem e encriptar;</li>
<li>consultar o id e desencriptar a mensagem para leitura.</li>
 
<br/>
  
<h2> Instalações Necessárias</h2></br>
No terminal Visual Studio Code ou no CMD, cole os comandos abaixo.</br>
</br>

#Instalação do NestJs</br>
npm i -g @nestjs/cli

#Instalação do TypeOrm</br>
npm add typeorm reflect-metadata pg

<br/>
<br/>
<h2> Instalação PostgresSQL</h2></br>
Link do Programa<br/>
https://www.postgresql.org/download/</br>
</br>
1º  Selecione o sistema operacional.
</br></br>
2º  Clique em download the installer</br>
</br>
3º Instale o programa.
</br>


<br/>
<h2> Instalação PG admin</h2></br>
Link do Programa<br/>
https://www.pgadmin.org/download/</br>
</br>
1º Selecione o sistema operacional.
</br>
</br>


2º  Instale o programa.
</br>
</br>
3º Abra o PG admin.
</br>
</br>
4º Crie um banco de dados de dados.</br>
</br>
![image](https://user-images.githubusercontent.com/21370452/147018720-4a42d06d-597a-462b-823c-aea1f45574e7.png)


<br/>

<h2> Configurações do arquivo de conexão com banco de dados </h2></br>
Mude os campos do arquivo <b> typeorm.config.ts </b> conforme as suas configurações do Postgres foram definidas.</br></br>
&nbsp;
&nbsp;
<img src="https://user-images.githubusercontent.com/21370452/147023220-1602a367-ef73-4399-b040-9d2765902d07.png">

<h2>Final</h2></br> 
No Terminal do Visual Studio Code, cole o comando abaixo para executar:</br>
npm run start:dev</br>
</br>
</br>

No Projeto foi utilizado o Postman para execução das requisições:</br>
https://www.postman.com

