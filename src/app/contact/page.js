export default function Contact( ) {
    
    
    return (
        <div>
            <h1>Contact Us</h1>
            <div class="container">
                <form action="idkwhatthisdoes.php">
                    <label for="ent-name">Name</label>
                    <br/>
                    <input type="text" id = "ent-name" name="their-name"/> 
                    <br/>
                    <label for="ent-email">Email</label>
                    <br/>
                    <input type="text" id="ent-email" name="their-email"/>
                    <br/>
                    <label for="ent-msg">Message </label>
                    <br/>
                    <input type="text" id="ent-msg" name="msg"/>
                    <br/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
  }