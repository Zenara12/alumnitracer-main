<template>
  <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center">
    <v-app-bar-title>
      <div class="d-flex align-center w-10">
          <div>
            <v-avatar image="@/assets/wlclogo.png"></v-avatar>
                WLC Ormoc INC.
          </div>
          <v-responsive max-width="350" location="left">
            
            <!-- <v-text-field
              density="compact"
              variant="solo"
              label="Search"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field> -->
          </v-responsive>
          <v-spacer></v-spacer>
          
        </div>
        
    </v-app-bar-title>
    <v-responsive location="right">
      <v-btn to="/">Home</v-btn>
      <v-btn to="/alumniforum">Forum</v-btn>
      <v-btn to="/alumnijoboffer">Jobs</v-btn>
      <v-btn to="/alumniannouncement">Announcements</v-btn>
    </v-responsive>
    <!-- <template v-slot:append>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
