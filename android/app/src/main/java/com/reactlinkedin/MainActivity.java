package com.reactlinkedin;

import com.facebook.react.ReactActivity;
import com.linkedin.platform.LISessionManager;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactLinkedin";
    }

    // add this method inside your activity class
    @Override
    public void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        LISessionManager.getInstance(getApplicationContext()).onActivityResult(this, requestCode, resultCode, data); // <------ add here

        super.onActivityResult(requestCode, resultCode, data);
    }
}
