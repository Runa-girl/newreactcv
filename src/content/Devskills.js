import React from 'react';
import '../App.css';

export function DevSkills() {
    return (
        <div class='contentContainer'>
            <div id="text">
                <h3>Development Skills</h3>
                <table>
                    <tr>
                        <td>
                            De absolute basis:
                        </td>
                        <td>
                            Verschillende office pakketten (microsoft, Google, open source)
                            <br />
                            MS Teams
                            <br />
                            HTML / CSS / Javascript
                        </td>
                    </tr>
                    <tr>
                        <td>Waar ik mee heb gewerkt:</td>
                        <td>
                            Javascript frameworks, zoals React en Typescript
                            <br />
                            API requests en responsen afhandelen met Axios 
                            <br />
                            version management control via Git en Fork
                            <br />
                            Azure DevOps, Zeplin, Postman en Swagger
                        </td>
                    </tr>
                    <tr>
                        <td>Overig:</td>
                        <td>bekend met werkvormen gebaseerd op scrum en kanban</td>
                    </tr>
                    <tr>
                        <td>Waar ik mee zou willen werken:</td>
                        <td>
                            Angular, Vue en Next.js staan hoog op mijn lijstje om op te pakken.
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}