	/*#pragma strict
	
	#pragma implicit
	#pragma downcast
		var Cafe: GameObject; // L'objet à animer
		//var anim: AnimationClip; // Le fichier d'animation
	
	
	function Start () {
	
	}
	
	function Update () {
	
	 
		function OnMouseDown() 
		{
	    	system.out.println("CAFE");
	    	
	    	//object.animation.clip = anim; // L'animation par défaut est anim
	    	//object.animation.Play(); // On joue l'animation
		}
	}*/
	
	// Debug.Log() 
	//var Myself : Transform; 
	//var WalkSpeed : float;
	//var player : Transform;
	//var PlayerAlert : int;
	//var motor : CharacterMotor;
	//var target : Transform; 
	 import System;

	
	#pragma strict
	
	
	var show = false;						 // Boolean : Affiche "Que voulez-vous" si vrai
	var donnee : String = ""; 				 // String : Donnee entree par l'utilisateur
	var GuiStyle : GUIStyle;				 // GUIStyle : Objet graphique pour la boite de dialogue
	var font : Font;					     // Font : Objet pour la police d'ecriture
	var succes : boolean = false;	         // Boolean : Affiche "Vous avez pris" si "donne" correct
	var time : float = 2.0f;				 // Float : Décrémente si "succes" vrai
	var objet:String;


	
	function OnMouseDown(){
	
		show = true;
		
	}  
	
	
	
	
	
	function Start(){

      objet=gameObject.name; 
	  
	}
	    
	
	
	function OnGUI () {         
		               
		     if (Event.current.Equals (Event.KeyboardEvent ("return")))
		     show = false;
		     
		     if(succes)
		 	 GUI.Box (Rect (Screen.width/8,Screen.height/4,Screen.width/1.3,200), "<size=38>Vous avez obtenu : "+objet+"</size>");
		     
		 
		     if(show){
		     time = 2.0f;
		 	 GuiStyle = new GUIStyle();
		 	 GuiStyle.font = font;
		 	 GuiStyle.normal.textColor = Color.white;
		 	 GuiStyle.fontSize = 40;
		 	 GuiStyle.alignment = TextAnchor.UpperCenter;
		     GUI.Box (Rect (Screen.width/8,Screen.height/4,Screen.width/1.3,200), "<size=38>CAFETERIA - Que voulez-vous ?</size>");  
		     GUI.SetNextControlName ("Texte");
		     donnee = GUI.TextArea(Rect (Screen.width/8+5, Screen.height/4+50, Screen.width/1.3, 100), donnee, GuiStyle);
		 	 GUI.FocusControl("Texte");   
		           
		     }
	} 
	
	        
	function Update(){
	       
	       //Debug.Log(objet); 
	       
			
	      
	
	    	 if(show){
	
	       	 Camera.main.GetComponent.<MouseLook>().enabled = false;
	       	 
	     	 }
	     	 else{
	      
	      	 Camera.main.GetComponent.<MouseLook>().enabled = true;
	     	  
	     	  
	     		 if(donnee.ToUpper() == objet.ToUpper()){
	    		 	 
	    		 	 time -= Time.deltaTime;
	    		 	 
	    		 	 if (time>0){
	    		 	 Inventaire.statutImages[5]=1;
	    		 	 succes = true;      
	    		 	
	    		 	 }
	    		 	 else{
	    		 	 donnee = "";
	    		 	 succes = false;
	    		 	 }
	    		 	 
	    		 	 
	    		 }else
	    		 {
	    		 donnee ="";
	    		 }
	        	 
	      	}
	      
	    }
	       
	      
	      
	      
	      
	   
	     
	
	        
	       
