This was intended to test whether an HttpClient instance in a component leaked if the component
was destroyed while the request was in progress.

However initial testing suggests the an HttpClient injected into a component is never deallocated
when the component is destroyed even if no request was ever made.

Steps To Recreate: 
1. Run the application. 
2. Create a memory snapshot. 
3. View snapshot summary, filter by HttpClient, note no HttpClient instances listed. 
4. Navigate to TestHttpClientComponent. 
5. Run memory snapshot, filter by HttpClient, note 1 instance and memory footprint. 
6. Navigate back to AppComponent using the 'Home' link _not_ pressing any button. 
7. Run memory snapshot, filter by HttpClient, note 1 instance still and same memory footprint as before?? 
8. Repeat many times. No more HttpClient instances are created, there is only ever one. 

Testing does however reveal that a component handler will process an HttpClient request even after the component has been destroyed, (possibly as a side-effect of the HttpClient instance not having been destroyed), and unsubscribing on onDestroy does prevent this.
