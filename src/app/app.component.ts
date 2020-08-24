import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	inquiryForm = this.formBuilder.group({
		'subject': new FormControl('', [Validators.required]),
	  'email': [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
		'phone_number': new FormControl('',  [Validators.required]),
		'body':new FormControl('', [Validators.required])
	});
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
	}

	onSubmit() {
		if (this.inquiryForm.valid) {
			const _v = this.inquiryForm.value;
			const form = new FormData();
			form.append('subject', _v.subject);
			form.append('email', _v.email);
			form.append('phone_number', _v.phone_number);
			form.append('purpose', _v.purpose);
			form.append('body', _v.body);
    }

     
   
	}

}
