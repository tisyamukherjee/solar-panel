
const link = document.createElement('link');
link.rel = "stylesheet"
link.href = "/src/app/contact/contact.css"

export default function Contact( ) {
    
    
    return (
        <div className="px-16 py-16 bg-white-500 w-5">
            <h1>Contact Us</h1>
            <div class="container">
                <form>
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
                <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
  }